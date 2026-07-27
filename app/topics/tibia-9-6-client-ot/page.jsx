import Tibia96ClientOtKeywordPage, { generateMetadata } from './tibia-9-6-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96ClientOtKeywordPage />;
}
