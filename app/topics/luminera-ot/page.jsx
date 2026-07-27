import LumineraOtKeywordPage, { generateMetadata } from './luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraOtKeywordPage />;
}
