import EterniaKeywordPage, { generateMetadata } from './eternia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaKeywordPage />;
}
