import Luminera76LowExpServerKeywordPage, { generateMetadata } from './luminera-7-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76LowExpServerKeywordPage />;
}
