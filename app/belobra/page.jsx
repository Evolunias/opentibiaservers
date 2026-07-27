import BelobraPage, { generateMetadata } from './belobra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BelobraPage />;
}
