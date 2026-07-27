import Tibia11LowExpClientKeywordPage, { generateMetadata } from './tibia-11-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpClientKeywordPage />;
}
