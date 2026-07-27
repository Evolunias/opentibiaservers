import Luminera15LowExpServerKeywordPage, { generateMetadata } from './luminera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15LowExpServerKeywordPage />;
}
