import Tibia11ClientOtKeywordPage, { generateMetadata } from './tibia-11-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11ClientOtKeywordPage />;
}
