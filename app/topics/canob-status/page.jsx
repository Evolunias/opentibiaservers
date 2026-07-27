import CanobStatusKeywordPage, { generateMetadata } from './canob-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobStatusKeywordPage />;
}
