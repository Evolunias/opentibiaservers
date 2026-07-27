import Unline11LowExpServerKeywordPage, { generateMetadata } from './unline-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11LowExpServerKeywordPage />;
}
