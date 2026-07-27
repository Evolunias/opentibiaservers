import LowrateBlazeraOtKeywordPage, { generateMetadata } from './lowrate-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraOtKeywordPage />;
}
