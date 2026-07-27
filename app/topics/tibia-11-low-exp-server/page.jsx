import Tibia11LowExpServerKeywordPage, { generateMetadata } from './tibia-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpServerKeywordPage />;
}
