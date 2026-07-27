import CurrentMediviaKeywordPage, { generateMetadata } from './current-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaKeywordPage />;
}
