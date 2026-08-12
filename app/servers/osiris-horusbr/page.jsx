import OsirisHorusbrServerReviewPage, { generateMetadata } from './osiris-horusbr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OsirisHorusbrServerReviewPage />;
}
