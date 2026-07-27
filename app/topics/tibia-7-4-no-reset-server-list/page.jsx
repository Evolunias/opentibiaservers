import Tibia74NoResetServerListKeywordPage, { generateMetadata } from './tibia-7-4-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NoResetServerListKeywordPage />;
}
