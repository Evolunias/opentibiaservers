import CurrentCanobOfficialKeywordPage, { generateMetadata } from './current-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobOfficialKeywordPage />;
}
