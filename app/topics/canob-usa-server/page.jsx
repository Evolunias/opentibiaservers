import CanobUsaServerKeywordPage, { generateMetadata } from './canob-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobUsaServerKeywordPage />;
}
