import Luminera96LowExpServerKeywordPage, { generateMetadata } from './luminera-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96LowExpServerKeywordPage />;
}
