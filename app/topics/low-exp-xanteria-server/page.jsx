import LowExpXanteriaServerKeywordPage, { generateMetadata } from './low-exp-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpXanteriaServerKeywordPage />;
}
