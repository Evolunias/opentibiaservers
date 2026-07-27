import Luminera100LowExpServerKeywordPage, { generateMetadata } from './luminera-10-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100LowExpServerKeywordPage />;
}
