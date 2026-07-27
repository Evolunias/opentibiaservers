import HighrateBlazeraServerKeywordPage, { generateMetadata } from './highrate-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraServerKeywordPage />;
}
