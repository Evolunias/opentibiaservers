import LowrateBlazeraKeywordPage, { generateMetadata } from './lowrate-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraKeywordPage />;
}
