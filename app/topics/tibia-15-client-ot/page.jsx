import Tibia15ClientOtKeywordPage, { generateMetadata } from './tibia-15-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15ClientOtKeywordPage />;
}
