import AureaPage, { generateMetadata } from './aurea';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureaPage />;
}
