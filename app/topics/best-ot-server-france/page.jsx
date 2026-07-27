import BestOtServerFranceKeywordPage, { generateMetadata } from './best-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerFranceKeywordPage />;
}
