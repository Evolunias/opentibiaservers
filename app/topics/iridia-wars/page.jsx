import IridiaWarsKeywordPage, { generateMetadata } from './iridia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaWarsKeywordPage />;
}
