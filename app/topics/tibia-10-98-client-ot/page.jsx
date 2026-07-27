import Tibia1098ClientOtKeywordPage, { generateMetadata } from './tibia-10-98-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ClientOtKeywordPage />;
}
