import BestThorniaOfficialKeywordPage, { generateMetadata } from './best-thornia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaOfficialKeywordPage />;
}
