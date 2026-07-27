import LowExpLumineraServerKeywordPage, { generateMetadata } from './low-exp-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLumineraServerKeywordPage />;
}
