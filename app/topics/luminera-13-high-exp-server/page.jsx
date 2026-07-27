import Luminera13HighExpServerKeywordPage, { generateMetadata } from './luminera-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13HighExpServerKeywordPage />;
}
