import EvoUnlineServerKeywordPage, { generateMetadata } from './evo-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoUnlineServerKeywordPage />;
}
