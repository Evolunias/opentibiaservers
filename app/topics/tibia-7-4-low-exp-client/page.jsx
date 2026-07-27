import Tibia74LowExpClientKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpClientKeywordPage />;
}
