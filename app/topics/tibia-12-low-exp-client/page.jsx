import Tibia12LowExpClientKeywordPage, { generateMetadata } from './tibia-12-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpClientKeywordPage />;
}
