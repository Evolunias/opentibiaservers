import Oxygenot12LowExpServerKeywordPage, { generateMetadata } from './oxygenot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12LowExpServerKeywordPage />;
}
