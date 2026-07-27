import Tibia12WithTrainersRegisterKeywordPage, { generateMetadata } from './tibia-12-with-trainers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersRegisterKeywordPage />;
}
