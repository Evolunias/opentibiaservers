import Luminera81LowExpServerKeywordPage, { generateMetadata } from './luminera-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81LowExpServerKeywordPage />;
}
