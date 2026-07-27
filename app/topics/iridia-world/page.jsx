import IridiaWorldKeywordPage, { generateMetadata } from './iridia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaWorldKeywordPage />;
}
