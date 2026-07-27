import Tibia12ClientOtKeywordPage, { generateMetadata } from './tibia-12-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12ClientOtKeywordPage />;
}
