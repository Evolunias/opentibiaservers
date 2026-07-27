import LowrateMediviaKeywordPage, { generateMetadata } from './lowrate-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaKeywordPage />;
}
