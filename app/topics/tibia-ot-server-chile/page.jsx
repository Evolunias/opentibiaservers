import TibiaOtServerChileKeywordPage, { generateMetadata } from './tibia-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerChileKeywordPage />;
}
