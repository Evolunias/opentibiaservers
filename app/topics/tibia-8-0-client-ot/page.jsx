import Tibia80ClientOtKeywordPage, { generateMetadata } from './tibia-8-0-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80ClientOtKeywordPage />;
}
