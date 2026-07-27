import LowrateBlazeraOtsKeywordPage, { generateMetadata } from './lowrate-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraOtsKeywordPage />;
}
