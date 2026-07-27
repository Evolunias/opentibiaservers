import NewSeasonCyntaraRegisterKeywordPage, { generateMetadata } from './new-season-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraRegisterKeywordPage />;
}
