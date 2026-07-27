import LowrateBlazeraServerKeywordPage, { generateMetadata } from './lowrate-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraServerKeywordPage />;
}
