import HighrateBlazeraClientKeywordPage, { generateMetadata } from './highrate-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraClientKeywordPage />;
}
