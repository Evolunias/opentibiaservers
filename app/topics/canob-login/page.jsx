import CanobLoginKeywordPage, { generateMetadata } from './canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobLoginKeywordPage />;
}
