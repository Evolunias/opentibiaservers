import Tibia74LowExpRegisterKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpRegisterKeywordPage />;
}
