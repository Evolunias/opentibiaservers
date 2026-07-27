import MidhemLowExpServerUsaKeywordPage, { generateMetadata } from './midhem-low-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemLowExpServerUsaKeywordPage />;
}
