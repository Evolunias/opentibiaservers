import BestNilotOfficialKeywordPage, { generateMetadata } from './best-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOfficialKeywordPage />;
}
