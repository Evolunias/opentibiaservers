import CurrentCyntaraOfficialKeywordPage, { generateMetadata } from './current-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraOfficialKeywordPage />;
}
