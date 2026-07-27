import HighrateBlazeraKeywordPage, { generateMetadata } from './highrate-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraKeywordPage />;
}
