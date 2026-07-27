import Luminera74LowExpServerKeywordPage, { generateMetadata } from './luminera-7-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74LowExpServerKeywordPage />;
}
