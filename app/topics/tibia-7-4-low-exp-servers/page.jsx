import Tibia74LowExpServersKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpServersKeywordPage />;
}
