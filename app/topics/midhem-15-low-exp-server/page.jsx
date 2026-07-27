import Midhem15LowExpServerKeywordPage, { generateMetadata } from './midhem-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15LowExpServerKeywordPage />;
}
